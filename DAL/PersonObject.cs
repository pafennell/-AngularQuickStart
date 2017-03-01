using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class PersonObject
    {
        private  string  connectionString = ConfigurationManager.ConnectionStrings["Connection"].ConnectionString;

        public string AddPerson(Person person)
        {
            string message = "";
            using (var connection = new SqlConnection(connectionString))
            using (var command = new SqlCommand("AddPerson", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = person.Firstname;
                command.Parameters.Add("@LastName", SqlDbType.VarChar).Value = person.Firstname;
                command.Parameters.Add("@Address", SqlDbType.VarChar).Value = person.Address;
                command.Parameters.Add("@City", SqlDbType.VarChar).Value = person.City;
                command.Parameters.Add("@County", SqlDbType.VarChar).Value = person.County;
                command.Parameters.Add("@State", SqlDbType.VarChar).Value = person.State;
                command.Parameters.Add("@Zip", SqlDbType.VarChar).Value = person.Zip;
                command.Parameters.Add("@Email", SqlDbType.VarChar).Value = person.Email;
             
                try
                {
                    connection.Open();
                    command.ExecuteNonQuery();   
                    connection.Close();
                }
                catch (Exception Ex)
                {
                    Ex.Message.ToString();

                }
            }

            return message;
        }
    }
}
