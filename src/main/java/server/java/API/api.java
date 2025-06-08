package server.java.API;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class api {

    @GetMapping("/api/test")
    public Map<String, String> hello() {
        Map<String, String> data = new HashMap<>();
        data.put("Name", "Doug");
        return data;
    }

    @GetMapping("/api/steam")
    public String getSteamInfo(){
        String steamApiKey = "32EC1DBB94DEDDB4160EDEF4D8CCD357";
        String steamId = "76561199508054671";

        String url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/"
                   + "?key=" + steamApiKey + "&steamids=" + steamId;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        return response.getBody();  // Or parse to JSON if preferred
    }
}

