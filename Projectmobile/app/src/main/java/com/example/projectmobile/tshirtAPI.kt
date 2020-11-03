package com.example.projectmobile

import retrofit2.Call
import retrofit2.http.GET

interface tshirtAPI {
    @GET("allshirt")
    fun retrieveshirt(): Call<List<shirtDB>>
}