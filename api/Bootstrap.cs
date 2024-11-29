namespace Api;

public static class Bootstrap
{
  public static void AddVitalServices(this IServiceCollection services)
  {
    AddCors(services);

    services.AddSignalR();
    services.AddSwaggerGen();
    services.AddControllers();
    services.AddEndpointsApiExplorer();
  }

  public static void AddCors(IServiceCollection services)
  {
    services.AddCors(options => 
    {
      options.AddPolicy(name: "Local", policy => {
        policy.WithOrigins("http://localhost:5173")
          .AllowAnyHeader()
          .AllowAnyMethod()
          .AllowCredentials();
      });
    });
  }
}