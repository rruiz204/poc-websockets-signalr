using Microsoft.AspNetCore.SignalR;

namespace Api.Src.Hubs;

public class TestingHub : Hub
{
  public override Task OnConnectedAsync()
  {
    Console.WriteLine($"new connection, id: {Context.ConnectionId}");
    return base.OnConnectedAsync();
  }

  public async Task SendTestMessage()
  {
    await Clients.All.SendAsync("TestMessageReceived");
  }
}