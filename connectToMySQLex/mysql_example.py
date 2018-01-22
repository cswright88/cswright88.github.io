###############################################################
# Try connect and print version
###############################################################

#!/usr/bin/python
# import pymysql
# import pymysql.cursors
#
# # Open database connection
# db = pymysql.connect("localhost","cswright88","Leibear07","Bucketlist" )
#
# # prepare a cursor object using cursor() method
# cursor = db.cursor()
#
# # execute SQL query using execute() method.
# cursor.execute("SELECT VERSION()")
#
# # Fetch a single row using fetchone() method.
# data = cursor.fetchone()
# print ("Database version : %s " % data)
#
# # disconnect from server
# db.close()


###############################################################
# Try select stment
###############################################################


import pymysql
# import pymysql.cursors

# Open database connection
db = pymysql.connect("localhost","cswright88","Leibear07","Bucketlist" )

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Prepare SQL query to INSERT a record into the database.
sql = "SELECT * FROM tbl_user WHERE [id] > 1; "
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Fetch all the rows in a list of lists.
   results = cursor.fetchall()
   print(results)
except:
   print ("Error: unable to fetch data")

# disconnect from server
db.close()

###############################################################
# Try insert stment
###############################################################

# import pymysql
# # import pymysql.cursors
#
# # Open database connection
# db = pymysql.connect("localhost","cswright88","Leibear07","Bucketlist" )
#
# # prepare a cursor object using cursor() method
# cursor = db.cursor()
#
# # Prepare SQL query to INSERT a record into the database.
# sql = "INSERT INTO tbl_user (user_name, user_username, user_password) VALUES ('lauren', 'lwright', 'pass223')"
# try:
#    # Execute the SQL command
#    cursor.execute(sql)
#    # Commit your changes in the database
#    db.commit()
# except:
#    # Rollback in case there is any error
#    db.rollback()
#
# # disconnect from server
# db.close()
