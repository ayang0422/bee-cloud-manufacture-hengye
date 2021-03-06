package com.bee.platform.cloud.user.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * <p>
 * 客户管理
 * </p>
 *
 * @author MP123
 * @since 2019-10-09
 */
@Data
@NoArgsConstructor
@Accessors(chain = true)
@ApiModel("客户管理返回信息")
public class AuthCustomerAndSupplierDTO implements Serializable {

    private static final long serialVersionUID = 1L;


    /**
     * id
     */
    @ApiModelProperty("id")
    private Integer id;

    /**
     * 客户或供应商名称
     */
    @ApiModelProperty("客户或供应商名称")
    private String name;






}
