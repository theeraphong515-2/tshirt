package com.example.projectmobile

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName

class shirtDB (
    @Expose
    @SerializedName("name_shirt") val name_shirt: String,

    @Expose
    @SerializedName("price") val price: Int,

    @Expose
    @SerializedName("img_shirt") val img_shirt: String){}