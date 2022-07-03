package org.easyintegration.blockchain;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.*;

// Running on-startup https://quarkus.io/guides/lifecycle

@ApplicationScoped
public class Main{
    void onStart(@Observes StartupEvent ev) {
        System.out.println("Startup...");
    }

    void onStop(@Observes ShutdownEvent ev) {               
         System.out.println("Shutdown...");
    }
}