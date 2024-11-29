using Microsoft.AspNetCore.Mvc;

namespace Api.Src.Controllers;

[ApiController]
[Route("api/")]
public class TestingController : ControllerBase
{
  [HttpGet("testing-rest")]
  public IActionResult Testing()
  {
    return Ok(new { message = "rest working!!!" });
  }
}