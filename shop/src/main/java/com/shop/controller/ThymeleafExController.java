package com.shop.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
@RequestMapping(value = "/thymeleaf")
public class ThymeleafExController {
    @GetMapping(value = "/ex01")
    public String thymeleafExample01(Model model) {
        model.addAttribute("data", "타임리프 예제 입니다.");
        return "thymeleafEx/thymeleafEx01"; // resources/templates 기준 위치
    }
}
