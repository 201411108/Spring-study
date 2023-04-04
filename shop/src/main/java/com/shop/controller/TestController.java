package com.shop.controller;

import com.shop.dto.ItemDto;
import com.shop.entity.Item;
import com.shop.repository.ItemRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/test")
public class TestController {

    ItemRepository itemRepository;

    @GetMapping(value = "/ex01")
    public String example01() {
        return "문자열을 보내는 예제입니다.";
    }

    @GetMapping(value = "/ex02")
    public ItemDto example02() {
        ItemDto itemDto = new ItemDto();
        itemDto.setId(new Long(1));
        itemDto.setItemDetail("상품 상세 설명");
        itemDto.setItemName("테스트 상품1");
        itemDto.setPrice(10000);
        itemDto.setRegTime(LocalDateTime.now());

        return itemDto;
    }

    @GetMapping(value = "/ex03")
    public HashMap<String, List<ItemDto>> example03() {
        HashMap<String, List<ItemDto>> response = new HashMap<>();
        List<ItemDto> itemDtoList = new ArrayList<>();

        for (int i = 0; i <= 10; i++) {
            ItemDto itemDto = new ItemDto();
            itemDto.setId(new Long(i + 1));
            itemDto.setItemName("테스트 상품" + i);
            itemDto.setItemDetail("상품 상세 설명" + i);
            itemDto.setPrice(10000 + (1000 * i));
            itemDto.setRegTime(LocalDateTime.now());
            itemDto.setUpdateTime(LocalDateTime.now());

            itemDtoList.add(itemDto);
        }
        response.put("itemDtoList", itemDtoList);
        return response;
    }

    @GetMapping(value = "/ex04/{price}")
    public HashMap<String, List<ItemDto>> example04(@PathVariable("price") Integer price) {
        HashMap<String, List<ItemDto>> response = new HashMap<>();
        List<Item> itemList = itemRepository.findByPriceLessThan(price);
        List<ItemDto> itemDtoList = new ArrayList<>();

        for(Item item : itemList) {
            ItemDto itemDto = new ItemDto();

            itemDto.setId(item.getId());
            itemDto.setItemName(item.getItemName());
            itemDto.setItemDetail(item.getItemDetail());
            itemDto.setPrice(item.getPrice());
            itemDto.setRegTime(item.getRegTime());
            itemDto.setUpdateTime(LocalDateTime.now());

            itemDtoList.add(itemDto);
        }
        response.put("itemLIstDto", itemDtoList);
        return response;
    }
}
