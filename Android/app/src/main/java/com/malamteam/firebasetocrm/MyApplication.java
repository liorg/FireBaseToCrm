package com.malamteam.firebasetocrm;

import android.support.multidex.MultiDexApplication;

/**
 * Created by lior_gr on 04/06/2017.
 */
//https://stackoverflow.com/questions/32807587/com-android-build-transform-api-transformexception
import android.app.Application;
import android.content.Context;
import android.support.*;

import com.google.firebase.database.FirebaseDatabase;
import com.squareup.picasso.Picasso;
import com.squareup.picasso.OkHttpDownloader;

public class MyApplication extends MultiDexApplication {
    private java.io.File cacheDir;
    @Override
    public void onCreate() {
        super.onCreate();

        FirebaseDatabase.getInstance().setPersistenceEnabled(true);

        if (android.os.Environment.getExternalStorageState().equals(android.os.Environment.MEDIA_MOUNTED))
            cacheDir = this.getExternalCacheDir();
        else
            cacheDir = this.getCacheDir();
        //https://www.youtube.com/watch?v=Et8njU58OTs

        Picasso.Builder builder = new Picasso.Builder(this);
       builder.downloader(new OkHttpDownloader(cacheDir,Integer.MAX_VALUE));
        Picasso built=builder.build();
       built.setIndicatorsEnabled(false);
       built.setLoggingEnabled(true);
        Picasso.setSingletonInstance(built);

    }


}
