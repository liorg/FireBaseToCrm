package com.malamteam.firebasetocrm.models;

import com.google.firebase.database.Exclude;
import com.google.firebase.database.IgnoreExtraProperties;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// [START post_class]
@IgnoreExtraProperties
public class Post {

    public String uid;
    public String author;
    public String title;
    public String body;
    public String crmId;
    public int starCount = 0;
    public Map<String, Boolean> stars = new HashMap<>();
    public String dateCreated;
    public String dateModified;
    public String dateMoved;
    public boolean updateOnCrm;
    public double latitude;
    public double longitude;
    public Post() {
        // Default constructor required for calls to DataSnapshot.getValue(Post.class)
    }

    public Post(String uid, String author, String title, String body ) {
        this.uid = uid;
        this.author = author;
        this.title = title;
        this.body = body;
    }

    public Post(String uid, String author, String title, String body,
                double lat,double longi,
                Date datecreated,Date datemodified,Date datemoved) {
        this.uid = uid;
        this.author = author;
        this.title = title;
        this.body = body;
        this.latitude = lat;
        this.longitude = longi;
        SimpleDateFormat dt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssZ");

        this.dateCreated=dt.format(datecreated);
        this.dateModified=dt.format(datemodified);
        this.dateMoved=dt.format(datemoved);
        this.updateOnCrm=false;
    }

    // [START post_to_map]
    @Exclude
    public Map<String, Object> toMap() {
        HashMap<String, Object> result = new HashMap<>();
        result.put("uid", uid);
        result.put("author", author);
        result.put("title", title);
        result.put("body", body);
        result.put("starCount", starCount);
        result.put("stars", stars);


        return result;
    }

    // [START post_to_map]
    @Exclude
    public Map<String, Object> toMap2() {
        HashMap<String, Object> result = new HashMap<>();
        result.put("uid", uid);
        result.put("author", author);
        result.put("title", title);
        result.put("body", body);
        result.put("starCount", starCount);
        result.put("stars", stars);
        result.put("dateCreated", dateCreated);
        result.put("dateModified", dateModified);
        result.put("dateMoved", dateMoved);
        result.put("updateOnCrm", updateOnCrm);
        result.put("latitude", latitude);
        result.put("longitude", longitude);
        result.put("crmId", crmId);
        return result;
    }
    // [END post_to_map]

}
// [END post_class]
