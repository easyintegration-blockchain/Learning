package org.easyintegration.blockchain.generator;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;

@ApplicationScoped
public class Generator{
    void onStart(@Observes StartupEvent ev) {
        System.out.println("Startup...");
    }

    void onStop(@Observes ShutdownEvent ev) {               
         System.out.println("ShutdownEvent...");
    }
}