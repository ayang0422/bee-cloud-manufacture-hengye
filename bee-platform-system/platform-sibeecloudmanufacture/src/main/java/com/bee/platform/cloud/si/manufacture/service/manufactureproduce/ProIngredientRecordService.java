package com.bee.platform.cloud.si.manufacture.service.manufactureproduce;

import com.baomidou.mybatisplus.service.IService;
import com.bee.platform.cloud.si.manufacture.dto.BlankingByMqttDTO;
import com.bee.platform.cloud.si.manufacture.entity.ProIngredientRecord;

import java.util.List;

/**
 * <p>
 * 配料明细统计表 服务类
 * </p>
 *
 * @author MP123
 * @since 2019-10-30
 */
public interface ProIngredientRecordService extends IService<ProIngredientRecord> {
    /**
     * @notes: 配料实时新增数据
     * @Author: junyang.li
     * @Date: 11:28 2019/10/31
     * @param batchId :
     * @param list :
     * @return: void
     */
    void updateBlankingByMqttData(Long batchId, List<BlankingByMqttDTO> list);

}
