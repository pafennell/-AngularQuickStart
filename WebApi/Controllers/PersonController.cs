using DAL;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class PersonController : ApiController
    {
        // GET api/<controller>
        private PersonObject personObject = new PersonObject();
        private List<Person> list = new List<Person>();

        // GET: api/Person
        public IEnumerable<Person> Get()
        {
            List<Person> personList = new List<Person>();
            var connectionString = ConfigurationManager.ConnectionStrings["Connection"].ConnectionString;
            var dataSet = new DataSet();
            using (var connection = new SqlConnection(connectionString))
            using (var command = new SqlCommand("Select * from Person", connection))
            using (var adapter = new SqlDataAdapter(command))
            {

                try
                {
                    connection.Open();
                    adapter.Fill(dataSet);
                    personList = SetProperties(dataSet);
                    connection.Close();
                }
                catch (Exception Ex)
                {
                    Ex.Message.ToString();

                }

            }
            return personList;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/Person
        [HttpPost]
        [Route("api/Person/AddUser")]
        public async Task<HttpResponseMessage> Post(HttpRequestMessage request)
        {
            var jsonString = await request.Content.ReadAsStringAsync();

            // Do something with the string 

            return new HttpResponseMessage(HttpStatusCode.Created);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        public List<Person> SetProperties(DataSet dataset)
        {
            foreach (DataRow row in dataset.Tables[0].Rows)
            {
                var person = new Person();
                person.PersonID = Convert.ToInt32(row["PersonID"]);
                person.Firstname = Convert.ToString(row["Firstname"]);
                person.LastName = Convert.ToString(row["Lastname"]);
                person.Address = Convert.ToString(row["Address"]);
                person.City = Convert.ToString(row["City"]);
                person.County = Convert.ToString(row["County"]);
                person.State = Convert.ToString(row["State"]);
                person.Zip = Convert.ToString(row["Zip"]);
                person.Email = Convert.ToString(row["Email"]);
                list.Add(person);
            }

            return list;
        }
    }
}