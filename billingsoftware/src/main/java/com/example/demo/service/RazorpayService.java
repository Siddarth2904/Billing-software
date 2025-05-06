package com.example.demo.service;

import com.razorpay.RazorpayException;
import com.example.demo.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}
