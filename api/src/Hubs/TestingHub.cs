using Microsoft.AspNetCore.SignalR;

namespace Api.Src.Hubs;

public class TestingHub : Hub
{
  public override Task OnConnectedAsync()
  {
    Console.WriteLine($"New Connection ID: {Context.ConnectionId}");
    return base.OnConnectedAsync();
  }
}