
using Firebase.Auth;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
//using System.ServiceModel;
using System.Text;




namespace FirebaseToCrm.CrmIntegration
{
    public class Account2Plugin : Plugin
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AccountPlugin"/> class.
        /// </summary>
        public Account2Plugin()
            : base(typeof(Account2Plugin))
        {
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Create", "account", new Action<LocalPluginContext>(AccountPreCreate)));
            base.RegisteredEvents.Add(new Tuple<int, string, string, Action<LocalPluginContext>>(20, "Update", "account", new Action<LocalPluginContext>(AccountPreUpdate)));
        }

        /// <summary>
        /// Executes the plug-in.
        /// </summary>
        /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
        /// <see cref="IPluginExecutionContext"/>,
        /// <see cref="IOrganizationService"/>
        /// and <see cref="ITracingService"/>
        /// </param>
        /// <remarks>
        /// For improved performance, Microsoft Dynamics CRM caches plug-in instances.
        /// The plug-in’s Execute method should be written to be stateless as the constructor
        /// is not called for every invocation of the plug-in. Also, multiple system threads
        /// could execute the plug-in at the same time. All per invocation state information
        /// is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
        protected void AccountPreCreate(LocalPluginContext localContext)
        {
            if (localContext == null)
                throw new ArgumentNullException("localContext");

            // Obtain the execution context from the service provider.
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            IOrganizationService service = localContext.OrganizationService;

            //Check if target exists.
            var isTargetExistsAndIsEnity = context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity;

            if (!isTargetExistsAndIsEnity)
                throw new InvalidPluginExecutionException("Pre update plugin step must contain an entity target");
            var ddd = WhoFirebase();

            throw new InvalidPluginExecutionException("this is "+ ddd);

        }
        public string WhoFirebase()
        {
           // return "sdsds dsds";
            var token = "AIzaSyBSD5vZpqL2Q0hV-CDwX6T7oYKTbEernjQ";

            // specify your app’s client key when creating the auth provider
            var ap = new FirebaseAuthProvider(new FirebaseConfig(token));

            // var result3=ap.CreateUserWithEmailAndPasswordAsync("xxx", "ccc").Result;
            // var result3 = ap.CreateUserWithEmailAndPasswordAsync("xxx", "ccc").Result;
            // FirebaseAuthLink rr =  ap.SignInWithEmailAndPasswordAsync("", "").Result;

            // sign in with OAuth. You can also sign in anonymously
            var auth = ap.SignInWithEmailAndPasswordAsync("noooooosh@gmail.com", "0549411222").Result;

            var ddd = auth.FirebaseToken;
            try
            {
                var ddddd = ap.GetUserAsync(ddd).Result;
                return ddddd.FirstName + " " + ddddd.LastName;
            }
            catch(Exception w3w)
            {
                throw w3w; 
            }
               
        }
        /// <summary>
        /// Executes the plug-in.
        /// </summary>
        /// <param name="localContext">The <see cref="LocalPluginContext"/> which contains the
        /// <see cref="IPluginExecutionContext"/>,
        /// <see cref="IOrganizationService"/>
        /// and <see cref="ITracingService"/>
        /// </param>
        /// <remarks>
        /// For improved performance, Microsoft Dynamics CRM caches plug-in instances.
        /// The plug-in’s Execute method should be written to be stateless as the constructor
        /// is not called for every invocation of the plug-in. Also, multiple system threads
        /// could execute the plug-in at the same time. All per invocation state information
        /// is stored in the context. This means that you should not use global variables in plug-ins.
        /// </remarks>
        protected void AccountPreUpdate(LocalPluginContext localContext)
        {

            if (localContext == null)
            {
                throw new ArgumentNullException("localContext");
            }

            // Obtain the execution context from the service provider.
            IPluginExecutionContext context = localContext.PluginExecutionContext;
            IOrganizationService service = localContext.OrganizationService;

            //Check if target & images exist.
            var isTargetExistsAndIsEnity = context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity;
            var isPreImageExists = context.PreEntityImages.Contains("Image");

            if (!isTargetExistsAndIsEnity)
                throw new InvalidPluginExecutionException("Pre update plugin step must contain an entity target");

            var ddd = WhoFirebase();

            throw new InvalidPluginExecutionException("this is " + ddd);


        }
    }
}
