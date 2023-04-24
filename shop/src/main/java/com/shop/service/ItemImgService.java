package com.shop.service;

import com.shop.entity.ItemImg;
import com.shop.repository.ItemImgRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.util.StringUtils;

import java.io.File;

@Service
@Transactional
public class ItemImgService {

    @Value("${itemImgLocation}")
    private String itemImgLocation;

    private final ItemImgRepository itemImgRepository;

    private final FileService fileService;

    public ItemImgService(ItemImgRepository itemImgRepository, FileService fileService) {
        this.itemImgRepository = itemImgRepository;
        this.fileService = fileService;
    }

    public void saveItemImg(ItemImg itemImg, MultipartFile itemImgFile) throws Exception{
        String originImgName = itemImgFile.getOriginalFilename();
        String imgName = "";
        String imgUrl = "";

        if (!StringUtils.isEmpty(originImgName)) {
            imgName = fileService.uploadFile(itemImgLocation, originImgName, itemImgFile.getBytes());
            imgUrl = "/images/item/" + imgName;
        }

        itemImg.updateItemImg(originImgName, imgName, imgUrl);
        itemImgRepository.save(itemImg);
    }
}
