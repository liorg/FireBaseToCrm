package com.malamteam.firebasetocrm.models;

import com.google.firebase.database.Exclude;
import com.google.firebase.database.IgnoreExtraProperties;

import java.util.HashMap;
import java.util.Map;

// [START comment_class]
@IgnoreExtraProperties
public class ResourceFile {

    public String uid;
    public String url;
    public String crmId;
    public String postId;
    public ResourceFile() {
        // Default constructor required for calls to DataSnapshot.getValue(Comment.class)
    }

    public ResourceFile(String uid, String url, String crmId,String postId) {
        this.uid = uid;
        this.url = url;
        this.crmId = crmId;
        this.postId = postId;
    }
    @Exclude
    public Map<String, Object> toMap() {
        HashMap<String, Object> result = new HashMap<>();
        result.put("uid", uid);
        result.put("crmId", crmId);
        result.put("url", url);
        result.put("postId", postId);
        return result;
    }
}
// [END comment_class]
