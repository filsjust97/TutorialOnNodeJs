var mysqlConnectionString = {

    connection  :{

        dev : {
            host: 'localhost',
            user: 'root',
            password : 'filipe',
            database : 'productmanagement'
        }

        ,

        qa : {
            host: 'localhost',
            user: 'root',
            password : 'filipe',
            database : 'yourdatabasename'
        }
        ,prod : {
            host: 'localhost',
            user: 'root',
            password : 'yourpasssword',
            database : 'yourdatabasename'
        }

    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;