from pymongo import MongoClient

def get_db_handle(db_name, host, port, username, password):

    client = MongoClient(host='localhost',
                         port=int(27017),
                         username='root',
                         password='123456'
                         )
    db_handle = client['django_learn']
    return db_handle, client
