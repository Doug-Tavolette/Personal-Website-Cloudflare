package server.java.API;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class api {

    @GetMapping("/api/test")
    public Map<String, String> hello() {
        Map<String, String> data = new HashMap<>();
        return data;
    }
}

