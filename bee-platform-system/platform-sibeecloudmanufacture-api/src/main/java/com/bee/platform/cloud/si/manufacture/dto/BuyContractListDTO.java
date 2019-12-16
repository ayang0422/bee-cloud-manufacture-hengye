package com.bee.platform.cloud.si.manufacture.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.experimental.Accessors;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * @ClassName BuyContractListDTO
 * @Description 合同列表返回数据
 * @author qh.wang
 * @version
 */
@Data
@Accessors(chain = true)
@ApiModel("合同列表返回数据")
public class BuyContractListDTO {

    @ApiModelProperty("合同数")
    private Integer count;

    @ApiModelProperty("data")
    private List<BuyContractListContentDTO> data;

}
