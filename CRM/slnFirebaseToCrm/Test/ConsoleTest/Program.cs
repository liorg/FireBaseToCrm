using Firebase.Auth;
using Firebase.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTest
{
    public class PostDetail
    {
        public string author { get; set; }
        public string body { get; set; }
        public int starCount { get; set; }
    }
    public class Post
    {
        public string Key { get; set; }

        public PostDetail Object { get; set; }
    }

    class Program
    {
        static void Main(string[] args) 
        {
            /*
           
            */
            var token = "AIzaSyBSD5vZpqL2Q0hV-CDwX6T7oYKTbEernjQ";

            // specify your app’s client key when creating the auth provider
            var ap = new FirebaseAuthProvider(new FirebaseConfig(token));

            // var result3=ap.CreateUserWithEmailAndPasswordAsync("xxx", "ccc").Result;
            // var result3 = ap.CreateUserWithEmailAndPasswordAsync("xxx", "ccc").Result;
           // FirebaseAuthLink rr =  ap.SignInWithEmailAndPasswordAsync("", "").Result;
      
             // sign in with OAuth. You can also sign in anonymously
             var auth = ap.SignInWithEmailAndPasswordAsync("noooooosh@gmail.com", "x").Result;

            var ddd=auth.FirebaseToken;
            var ddddd=ap.GetUserAsync(ddd).Result;

            Console.WriteLine("{0},{1}", ddddd.Email, ddddd.LastName);
            Console.ReadLine();

            var firebase = new FirebaseClient(
                         "https://fir-tocrm.firebaseio.com",
                         new FirebaseOptions
                         {

                             AuthTokenAsyncFactory = () => Task.FromResult(auth.FirebaseToken)
                         });

            var dinos = firebase
              .Child("posts")
              .OnceAsync<PostDetail>().Result;
           
            foreach (var dino in dinos)
            {
                Console.WriteLine($"{dino.Key} is {dino.Object.author }m high.");
            }
        }
    }
}
