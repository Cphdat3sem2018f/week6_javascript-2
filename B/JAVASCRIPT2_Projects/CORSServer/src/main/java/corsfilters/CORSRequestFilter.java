package corsfilters;

import java.io.IOException;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.PreMatching;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

@Provider
@PreMatching
public class CORSRequestFilter implements ContainerRequestFilter
{
    @Override
    public void filter(ContainerRequestContext requestCtx) throws IOException
    {
        if (requestCtx.getRequest().getMethod().equals("OPTIONS"))
        {
            System.out.println("REQUEST WITH METHOD OPTIONS DETECTED...");
            
            requestCtx.abortWith(Response.status(Response.Status.METHOD_NOT_ALLOWED).build());
        }
    }
}