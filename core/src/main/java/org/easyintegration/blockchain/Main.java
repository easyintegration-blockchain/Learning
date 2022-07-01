package org.easyintegration.blockchain;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;

@ApplicationScoped
public class Main{
    void onStart(@Observes StartupEvent ev) {
        System.out.println("Startup...");
    }

    void onStop(@Observes ShutdownEvent ev) {               
         System.out.println("Shutdown...");
    }
}