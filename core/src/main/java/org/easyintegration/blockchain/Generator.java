package org.easyintegration.blockchain

@ApplicationScoped
public class Generator{
    void onStart(@Observes StartupEvent ev) {
        System.out.println("HelloWorld");
    }
}