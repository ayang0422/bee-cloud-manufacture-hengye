package com.bee.platform.cloud.si.manufacture.entity;

import java.io.Serializable;

import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import com.baomidou.mybatisplus.activerecord.Model;
import java.io.Serializable;

import com.baomidou.mybatisplus.annotations.Version;

import lombok.*;
import lombok.experimental.Accessors;

/**
 * <p>
 * 采购合同附近信息
 * </p>
 *
 * @author jie.zhang123
 * @since 2019-09-23
 */
@NoArgsConstructor
@Setter
@Getter
@Accessors(chain=true)
@ToString
@TableName("buy_contract_attachment")
public class BuyContractAttachment extends Model<BuyContractAttachment> {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 合同业务id
     */
    private String contractBusinessId;
    /**
     * 附件名称
     */
    private String fileName;
    /**
     * 附件url
     */
    private String fileUrl;
    /**
     * 状态（0无效 1有效）
     */
    private Integer status;
    /**
     * 创建人id
     */
    private Integer createId;
    /**
     * 创建人
     */
    private String creator;
    /**
     * 创建时间
     */
    private Date createTime;
    /**
     * 更新人id
     */
    private Integer modifyId;
    /**
     * 更新人
     */
    private String modifier;
    /**
     * 更新时间
     */
    private Date modifyTime;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
