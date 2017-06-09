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

public class MyApplication extends MultiDexApplication {

    @Override
    public void onCreate() {
        super.onCreate();
        FirebaseDatabase.getInstance().setPersistenceEnabled(true);

        //mas codigo
    }


}
