package com.sportify;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.xebia.reactnative.TabLayoutPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     *
     */
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
    }
    @Override
    protected String getMainComponentName() {
        return "Sportify";
    }
}
