package corsrest;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("cors")
public class CORSREST
{
    @Context
    private UriInfo context;

    public CORSREST()
    {
    }
    
    @GET
    @Path("disallowed")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDisallowedCORS()
    {
        return Response.ok("{\"success\":true}").build();
    }
    
    @GET
    @Path("allowed")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllowedCORS()
    {
        return Response
            .ok("{\"success\":true}")
            .header("Access-Control-Allow-Origin", "*")
            .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
            .build();
    }
    
    @GET
    @Path("proxy")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getIp() throws Exception
    {
        URL url = new URL("http://ip.jsontest.com/?alloworigin=false");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("User-Agent", "");
        
        StringBuilder result = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line = "";
        
        while ((line = br.readLine()) != null)
        {
            result.append(line);
        }
        
        br.close();
        
        return Response.ok(result.toString()).build();
    }
}