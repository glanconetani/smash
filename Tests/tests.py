# import unittest
# from selenium import webdriver
# import time
# from selenium.webdriver.support.ui import Select


# chromeDriver = webdriver.Chrome('C:\\Users\\Jake\\Downloads\\chromedriver_win32\\chromedriver')
# chromeDriver.get("localhost:4001")
# #UnitTest
# def characterLinkTest():
#     my_list = ["Mario", "Kirby", "Luigi", "Jigglypuff", "Zelda", "Falco", "Zero_Suit_Samus", "Donkey_Kong", "Fox",
#      "Ness", "Peach", "Dr._Mario", "Marth", "Wario",
#      "Link", "Pikachu", "Captain_Falcon", "Daisy", "Pichu", "Lucina", "Snake"]

#     time.sleep(1)
#     url = chromeDriver.current_url
#     for character in my_list:
#         time.sleep(1)
#         link = chromeDriver.find_element_by_link_text(character)
#         print(link)
#         link.click()
#         time.sleep(1)
#         url = str(chromeDriver.current_url)
#         if not character in url:
#             assert False
#         chromeDriver.back()
# #UnitTest
# def characterSearchTest():
#     time.sleep(2)
#     url = chromeDriver.current_url
#     # link = chromeDriver.find_element_by_xpath("//span[contains(text(), 'Search for a character')]")
#     link = chromeDriver.find_element_by_tag_name("span").click()
#     # search = chromeDriver.find_element_by_xpath("//input[@type='text']")
#     time.sleep(1)
#     select = Select(chromeDriver.find_element_by_class_name("sc-EHOje jyIsrO"))
#     time.sleep(1)
#     select.select_by_visible_text('Mario')
    

#     url = str(chromeDriver.current_url)
#     if not "Mario" in url:
#         assert False
#     chromeDriver.back()
    
    

# # tests for phase 3
# def main():
#     ##characterLinkTest()
#     characterSearchTest()
#     time.sleep(2)
#     chromeDriver.quit()
# main()