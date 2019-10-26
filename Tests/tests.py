import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("localhost:4001")


class PythonTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def testsearch(self):
        driver = self.driver
        driver.get("localhost:4001")
        self.assertIn("Welcome", driver.title)
        elem = driver.find_element_by_name("mario")
        elem.click();
        self.assertIn("mario", driver.title)


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()