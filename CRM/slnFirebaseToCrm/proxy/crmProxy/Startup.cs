using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(crmProxy.Startup))]
namespace crmProxy
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
