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
    public ResponseEntity<String> getSteamInfo(){
        String steamApiKey = "";
        String steamId = "76561199508054671";

        String url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/"
                   + "?key=" + steamApiKey + "&steamid=" + steamId;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        
        return response;  // Or parse to JSON if preferred
    }

    // @GetMapping("/api/github")
    // public ResponseEntity<String> getGitHubInfo(){
        
    // }
}

