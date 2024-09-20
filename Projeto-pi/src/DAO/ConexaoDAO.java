package DAO;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.swing.JOptionPane;

public class ConexaoDAO{
    public Connection conectaPJ (){

        Connection conn = null;
        try{
            String url = "jdbc:Mysql://localhost:3306/projeto?user=root&passoword=";
            conn = DriverManager.getConnection(url);

        }catch(SQLException e){
        JOptionPane.showMessageDialog(null, "ConexaoDAO" + e.getMessage());
        }
        return conn;
    }
}