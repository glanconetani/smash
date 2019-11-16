import unittest
import sys
import mysql.connector as my   

class TestDatabaseMethods(unittest.TestCase):
    
    def test_database_connection_with_wrong_login(self):
        try:
            con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="notThePassword",
            db="smash"
            )
            result = "successful"
            con.close()
        except:
            result = "unsuccessful"
        self.assertEqual(result, "unsuccessful")

    
    def test_database_connection_test(self):
        con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="461lsmash!",
            db="smash"
        )
    
        if (con):
            result = "successful"
        else:
            result = "unsuccessful"
        
        con.close()

        self.assertEqual(result, "successful")

    
    def test_generate_table(self):
        con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="461lsmash!",
            db="smash"
        )
        cursor = con.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS testTable (Id INT)")
        cursor.execute("SELECT count(*) FROM information_schema.columns WHERE table_name = 'testTable'")
        rows = cursor.fetchall()
        if(rows == [(1,)]):
            results = "successful"
        else:
            results = "unsuccessful"
        con.close()
        self.assertEqual(results, "successful")      
    

    def test_delete_table(self):
        con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="461lsmash!",
            db="smash"
        )
        cursor = con.cursor()
        cursor.execute("DROP TABLE testTable")
        cursor.execute("SELECT count(*) FROM information_schema.columns WHERE table_name = 'testTable'")
        rows = cursor.fetchall()
        if(rows == [(0,)]):
            results = "successful"
        else:
            results = "unsuccessful"
        con.close()
        self.assertEqual(results, "successful")   

    
    def test_pull_table_that_does_not_exist(self):
        con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="461lsmash!",
            db="smash"
        )
        cursor = con.cursor()
        cursor.execute("SELECT count(*) FROM information_schema.columns WHERE table_name = 'fakeTable'")
        rows = cursor.fetchall()
        if(rows == [(0,)]):
            results = "successful"
        else:
            results = "unsuccessful"
        con.close()
        self.assertEqual(results, "successful") 
    
    
    def test_pull_character_info(self):
        results_of_pull = [('Jab 1', '1.5', 'ground', 'Bayonetta', 'Bayonetta', '#A79FE5', 84, 1.6, 2, 'yes', 'yes'), ('Jab 2', '1.5', 'ground', None, None, None, None, None, None, None, None), ('Jab 3', '2.7', 'ground', None, None, None, None, None, None, None, None), ('Rapid Jab', '0.3', 'ground', None, None, None, None, None, None, None, None), ('Rapid Jab Finisher (Hit 1)', '1', 'ground', None, None, None, None, None, None, None, None), ('Rapid Jab Finisher (Hit 2)', '6', 'ground', None, None, None, None, None, None, None, None), ('Dash Attack', '10 (+1)', 'ground', None, None, None, None, None, None, None, None), ('Dash Attack (Late)', '8 (+1)', 'ground', None, None, None, None, None, None, None, None), ('Ftilt 1', '3.5', 'ground', None, None, None, None, None, None, None, None), ('Ftilt 2', '3', 'ground', None, None, None, None, None, None, None, None), ('Ftilt 3', '8.5', 'ground', None, None, None, None, None, None, None, None), ('Utilt (Hit 1)', '5', 'ground', None, None, None, None, None, None, None, None), ('Utilt (Hit 1, Late)', '2', 'ground', None, None, None, None, None, None, None, None), ('Utilt (Hit 2)', '6', 'ground', None, None, None, None, None, None, None, None), ('Dtilt', '6/7', 'ground', None, None, None, None, None, None, None, None), ('Fsmash', '16/14', 'ground', None, None, None, None, None, None, None, None), ('Usmash (Early)', '17', 'ground', None, None, None, None, None, None, None, None), ('Usmash', '16', 'ground', None, None, None, None, None, None, None, None), ('Usmash (Late)', '15', 'ground', None, None, None, None, None, None, None, None), ('Dsmash (Hit 1)', '5', 'ground', None, None, None, None, None, None, None, None), ('Dsmash (Hit 2)', '16', 'ground', None, None, None, None, None, None, None, None), ('Dsmash (Hit 2, Late)', '15', 'ground', None, None, None, None, None, None, None, None), ('Standing Grab', '', 'ground', None, None, None, None, None, None, None, None), ('Dash Grab', '', 'ground', None, None, None, None, None, None, None, None), ('Pivot Grab', '', 'ground', None, None, None, None, None, None, None, None), ('Spotdodge', '', 'ground', None, None, None, None, None, None, None, None), ('Forward Roll', '', 'ground', None, None, None, None, None, None, None, None), ('Back Roll', '', 'ground', None, None, None, None, None, None, None, None), ('Airdodge', '', 'ground', None, None, None, None, None, None, None, None), ('Nair', '8', 'aerial', None, None, None, None, None, None, None, None), ('Nair (Late)', '6', 'aerial', None, None, None, None, None, None, None, None), ('Nair (Bullet Artes Extension)', '4.5', 'aerial', None, None, None, None, None, None, None, None), ('Fair 1', '3', 'aerial', None, None, None, None, None, None, None, None), ('Fair 2', '2.2', 'aerial', None, None, None, None, None, None, None, None), ('Fair 3', '6', 'aerial', None, None, None, None, None, None, None, None), ('Bair', '13/10', 'aerial', None, None, None, None, None, None, None, None), ('Uair', '9', 'aerial', None, None, None, None, None, None, None, None), ('Uair (Bullet Artes Extension)', '4', 'aerial', None, None, None, None, None, None, None, None), ('Dair', '7/8/9', 'aerial', None, None, None, None, None, None, None, None), ('Dair (Late)', '8/9', 'aerial', None, None, None, None, None, None, None, None), ('Dair (Landing)', '5', 'aerial', None, None, None, None, None, None, None, None), ('Bullet Climax', '1.35', 'special', None, None, None, None, None, None, None, None), ('Bullet Climax (Charged)', '2.7', 'special', None, None, None, None, None, None, None, None), ('No Kick Heel Slide (Hit 1, Early)', '9', 'special', None, None, None, None, None, None, None, None), ('No Kick Heel Slide (Hit 1)', '8.5', 'special', None, None, None, None, None, None, None, None), ('No Kick Heel Slide (Hit 1, Late)', '8', 'special', None, None, None, None, None, None, None, None), ('Heel Slide (Hit 1, Early)', '9', 'special', None, None, None, None, None, None, None, None), ('Heel Slide (Hit 1)', '8.5', 'special', None, None, None, None, None, None, None, None), ('Heel Slide (Hit 1, Late)', '8', 'special', None, None, None, None, None, None, None, None), ('Heel Slide (Hit 1, Latest)', '8', 'special', None, None, None, None, None, None, None, None), ('Heel Slide (Hit 2)', '6', 'special', None, None, None, None, None, None, None, None), ('After Burner Kick (Early)', '6', 'special', None, None, None, None, None, None, None, None), ('After Burner Kick', '7', 'special', None, None, None, None, None, None, None, None), ('After Burner Kick (Late)', '6', 'special', None, None, None, None, None, None, None, None), ('After Burner Kick (Down)', '6.5', 'special', None, None, None, None, None, None, None, None), ('After Burner Kick (Down, Landing)', '5', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Grounded)', '3', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Grounded, Bullet Artes Extension)', '-', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Aerial)', '2', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Aerial, Bullet Artes Extension)', '-', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Middle Hits)', '0.2', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Middle Hits)', '0.2', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Middle Hits)', '0.2', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Final Hit, 1st Use)', '3', 'special', None, None, None, None, None, None, None, None), ('Witch Twist (Final Hit, 2nd Use)', '3', 'special', None, None, None, None, None, None, None, None), ('Witch Time', '-', 'special', None, None, None, None, None, None, None, None), ('Witch Time (Bat Within)', '-', 'special', None, None, None, None, None, None, None, None), ('Fthrow', '7, 3', 'throw', None, None, None, None, None, None, None, None), ('Bthrow', '3, 6', 'throw', None, None, None, None, None, None, None, None), ('Uthrow', '3, 4.5', 'throw', None, None, None, None, None, None, None, None), ('Dthrow', '3, 5', 'throw', None, None, None, None, None, None, None, None)]
        con = my.connect(
            host="smash-project.cwrpa3uglhdr.us-east-2.rds.amazonaws.com",        
            user="master",
            passwd="461lsmash!",
            db="smash"
        )
        cursor = con.cursor()
        cursor.execute("SELECT * FROM Bayonetta")
        rows = cursor.fetchall()
        if(rows == results_of_pull):
            results = "successful"
        else:
            results = "unsuccessful"
        con.close()
        self.assertEqual(results, "successful") 



if __name__ == "__main__":
    unittest.main()
