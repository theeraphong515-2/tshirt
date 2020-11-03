package com.example.projectmobile

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.squareup.picasso.Picasso
import kotlinx.android.synthetic.main.activity_shirtpage.*

class shirtpage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_shirtpage)

        var mName = intent.getStringExtra("mName")
        var mPrice = intent.getStringExtra("mPrice")
        var mImage = intent.getStringExtra("mImage")

        Picasso.get().load(mImage).into(imageshirt)
        nameText.setText(mName)
        priceText.setText(mPrice)
    }
}