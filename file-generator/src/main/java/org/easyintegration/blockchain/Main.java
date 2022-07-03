package org.easyintegration.blockchain;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;
import com.fasterxml.jackson.databind.*;
import java.io.*;
import java.util.*;

// Running on-startup https://quarkus.io/guides/lifecycle
@ApplicationScoped
public class Main{
    void onStart(@Observes StartupEvent ev) {
        System.out.println("Startup...");
        createComponentJson();
        createKameletsJson();
    }

    void onStop(@Observes ShutdownEvent ev) {               
         System.out.println("Shutdown...");
    }

    void createComponentJson(){
        File file = new File("../core/src/main/webui/public/components");
        List<String> components = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();
        
        String[] files=file.list();
        for (int i = 0; i < files.length; i++) {
            components.add(files[i]);
        }
        try {
            String componentsJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(components);
            System.out.println(componentsJson);
            objectMapper.writeValue(new File("../core/src/main/webui/public/data/components.json"), components);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    void createKameletsJson(){
        File file = new File("../core/src/main/webui/public/kamelets");
        List<String> kamelets = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();
        
        String[] files=file.list();
        for (int i = 0; i < files.length; i++) {
            kamelets.add(files[i]);
        }
        try {
            String componentsJson = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(kamelets);
            System.out.println(componentsJson);
            objectMapper.writeValue(new File("../core/src/main/webui/public/data/kamelets.json"), kamelets);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}