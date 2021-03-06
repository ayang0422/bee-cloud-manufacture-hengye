import { Component } from 'react';
import { Row, Col, Card, Form, DatePicker, Spin, Radio, message, Empty } from 'antd';
import styles from '../../index.less';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from "bizcharts";
import NewRangePicker from "@/components/NewRangePicker";
import DataSet from "@antv/data-set";
import { getPrice, getAmount, getPay, getRatio, getPosition, getGoods } from '../../services/services'

const { DataView } = DataSet;

export default class Data extends Component {
  state = {
    startTime: '',
    endTime: '',
    priceType: 4,
    priceData: [],
    priceTotal: 0,
    priceLoading: false,
    amountType: 4,
    amountData: [],
    amountTotal: 0,
    amountLoading: false,
    payType: 4,
    payData: [],
    payTotal: 0,
    payLoading: false,
    ratioType: 4,
    ratioData: [],
    ratioLoading: false
  }

  getBasePrice = (values) => {
    const { startTime, endTime, priceType } = this.state;
    let self = this;
    this.setState({
      priceLoading: true
    }, () => {
      let params = {
        type: priceType,
        startTime,
        endTime,
        ...values
      }
      getPrice(params).then(res => {
        if (res.code === 1) {
          let priceTotal = 0;
          let newArray = [];
          res.object.forEach(item => {
            priceTotal += item.money || 0;
            newArray.push({
              money: item.money || 0,
              name: params.type === 4 ? item.supplierName : item.productName
            })
          })
          self.setState({
            priceData: newArray,
            priceTotal
          })
        }
        self.setState({
          startTime: params.startTime,
          endTime: params.endTime,
          priceType: params.type,
          priceLoading: false
        })
      })
    })
  }

  getBaseAmount = (values) => {
    const { startTime, endTime, amountType } = this.state;
    let self = this;
    this.setState({
      amountLoading: true
    }, () => {
      let params = {
        type: amountType,
        startTime,
        endTime,
        ...values
      }
      getAmount(params).then(res => {
        if (res.code === 1) {
          let amountTotal = 0;
          let newArray = [];
          res.object.forEach(item => {
            amountTotal += item.amount || 0;
            newArray.push({
              amount: item.amount || 0,
              name: params.type === 4 ? item.supplierName : item.productName
            })
          })
          self.setState({
            amountData: newArray,
            amountTotal
          })
        }
        self.setState({
          startTime: params.startTime,
          endTime: params.endTime,
          amountType: params.type,
          amountLoading: false
        })
      })
    })
  }

  getBasePay = (values) => {
    const { startTime, endTime, payType } = this.state;
    let self = this;
    this.setState({
      payLoading: true
    }, () => {
      let params = {
        type: payType,
        startTime,
        endTime,
        ...values
      }
      getPay(params).then(res => {
        if (res.code === 1) {
          let payTotal = 0;
          let newArray = [];
          res.object.forEach(item => {
            payTotal += item.money || 0;
            newArray.push({
              money: item.money || 0,
              name: params.type === 4 ? item.supplierName : item.productName
            })
          })
          self.setState({
            payData: newArray,
            payTotal
          })
        }
        self.setState({
          startTime: params.startTime,
          endTime: params.endTime,
          payType: params.type,
          payLoading: false
        })
      })
    })
  }

  getBaseRatio = (values) => {
    const { startTime, endTime, ratioType } = this.state;
    let self = this;
    this.setState({
      ratioLoading: true
    }, () => {
      let params = {
        type: ratioType,
        startTime,
        endTime,
        ...values
      }
      getRatio(params).then(res => {
        if (res.code === 1) {
          let newArray = [];
          res.object.forEach(item => {
            newArray.push({
              name: params.type === 4 ? item.supplierName : item.productName,
              type: "合格率",
              ratio: item.passRatio || 0,
            }, {
              name: params.type === 4 ? item.supplierName : item.productName,
              type: "不合格率",
              ratio: item.failureRatio || 0,
            })
          })
          self.setState({
            ratioData: newArray
          })
        }
        self.setState({
          startTime: params.startTime,
          endTime: params.endTime,
          ratioType: params.type,
          ratioLoading: false
        })
      })
    })
  }

  onChangePrice = (priceType) => {
    this.getBasePrice({ type: priceType });
  }

  legendPrice = (val) => {
    const { priceData, priceTotal } = this.state;
    let item = '';
    priceData.forEach((row, index) => {
      if (val === row.name) {
        item = row;
      }
    })
    if (priceTotal === 0) {
      return `${val}：0% ￥${item.money || 0}`
    }

    return `${val}：${((item.money / priceTotal) * 100).toFixed(2)}% ￥${item.money || 0}`
  }

  onChangeAmount = (amountType) => {
    this.getBaseAmount({ type: amountType });
  }

  legendAmount = (val) => {
    const { amountData, amountTotal } = this.state;
    let item = '';
    amountData.forEach((row, index) => {
      if (val === row.name) {
        item = row;
      }
    })
    if (amountTotal === 0) {
      return `${val}：0%`
    }
    return `${val}：${((item.amount / amountTotal) * 100).toFixed(2)}%`
  }

  onChangePay = (payType) => {
    this.getBasePay({ type: payType });
  }

  legendPay = (val) => {
    const { payData, payTotal } = this.state;
    let item = '';
    payData.forEach((row, index) => {
      if (val === row.name) {
        item = row;
      }
    })
    if (payTotal === 0) {
      return `${val}：0% ￥${item.money}`
    }
    return `${val}：${((item.money / payTotal) * 100).toFixed(2)}% ￥${item.money || 0}`
  }

  onChangeRatio = (ratioType) => {
    this.getBaseRatio({ type: ratioType });
  }

  changeTime = ({ timeType, dateStrings }) => {
    const { priceType, amountType, payType, ratioType } = this.state;
    this.getBasePrice({ type: priceType, startTime: dateStrings[0], endTime: dateStrings[1] });
    this.getBaseAmount({ type: amountType, startTime: dateStrings[0], endTime: dateStrings[1] });
    this.getBasePay({ type: payType, startTime: dateStrings[0], endTime: dateStrings[1] });
    this.getBaseRatio({ type: ratioType, startTime: dateStrings[0], endTime: dateStrings[1] });
  }

  render() {
    const { priceType, priceData, priceTotal, priceLoading, amountType, amountData, amountTotal, amountLoading,
      payType, payData, payTotal, payLoading, ratioType, ratioData, ratioLoading } = this.state;

    const dv_price = new DataView();
    dv_price.source(priceData).transform({
      type: "percent", // 转换类型
      field: "money",
      dimension: "name",
      as: "percent" // 结果存储
    });

    const dv_amount = new DataView();
    dv_amount.source(amountData).transform({
      type: "percent", // 转换类型
      field: "amount",
      dimension: "name",
      as: "percent" // 结果存储
    });

    const dv_pay = new DataView();
    dv_pay.source(payData).transform({
      type: "percent", // 转换类型
      field: "money",
      dimension: "name",
      as: "percent" // 结果存储
    });

    const ds = new DataSet();
    const dv_ratio = ds.createView().source(ratioData).transform({
      type: "percent",
      field: "ratio", // 统计销量
      dimension: "type", // 每年的占比
      groupBy: ["name"], // 以不同产品类别为分组
      as: "percent"
    });

    return (
      <Card
        title="采购数据"
        extra={<NewRangePicker showOne={true} onChange={this.changeTime} />}
      >
        <Row>
          <Col span={24}>
            <Spin spinning={priceLoading}>
              <div className={styles.col_header}>
                <span>采购额</span>
                <Radio.Group onChange={(e) => this.onChangePrice(e.target.value)} value={priceType}>
                  <Radio.Button value={4}>供应商</Radio.Button>
                  <Radio.Button value={1}>主料</Radio.Button>
                  <Radio.Button value={2}>辅料</Radio.Button>
                  <Radio.Button value={3}>成品</Radio.Button>
                </Radio.Group>
              </div>
              {
                priceData.length === 0 ?
                  <Empty /> :
                  <Chart height={400} data={dv_price} scale={{ percent: { formatter: val => (val * 100).toFixed(2) + "%" } }} padding={[60, 440, 60, 0]} forceFit>
                    <Coord type="theta" radius={1} innerRadius={0.75} />
                    <Axis name="percent" />
                    <Legend
                      position="right-center"
                      offsetX={-80}
                      itemMarginBottom={10}
                      itemFormatter={(val) => this.legendPrice(val)}
                      textStyle={{ fill: '#333333', fontSize: '14' }}
                    />
                    <Tooltip
                      showTitle={false}
                      itemTpl={'<li>' +
                        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
                        '<span class="li-name">{name}：</span>' +
                        '<span>{value}</span>' +
                        '</li>'}
                    />
                    <Guide>
                      <Guide.Html
                        position={["50%", "50%"]}
                        html={`<div style='color:#333333;font-size:18px;text-align: center;'>采购额<br><span style='color:#333333;font-size:20px;font-weight: bold'>￥${priceTotal.toFixed(2)}</span></div>`}
                        alignX="middle"
                        alignY="middle"
                      />
                    </Guide>
                    <Geom type="intervalStack" position="percent" color="name" style={{ lineWidth: 5, stroke: "#fff" }}
                      tooltip={["name*percent", (name, percent) => { percent = (percent * 100).toFixed(2) + "%"; return { name: name, value: percent }; }]}
                    >
                    </Geom>
                  </Chart>
              }
            </Spin>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Spin spinning={amountLoading}>
              <div className={styles.col_header}>
                <span>采购量</span>
                <Radio.Group onChange={(e) => this.onChangeAmount(e.target.value)} value={amountType}>
                  <Radio.Button value={4}>供应商</Radio.Button>
                  <Radio.Button value={1}>主料</Radio.Button>
                  <Radio.Button value={2}>辅料</Radio.Button>
                  <Radio.Button value={3}>成品</Radio.Button>
                </Radio.Group>
              </div>
              {
                amountData.length === 0 ?
                  <Empty /> :
                  <Chart height={400} data={dv_amount} scale={{ percent: { formatter: val => (val * 100).toFixed(2) + "%" } }} padding={[60, 440, 60, 0]} forceFit>
                    <Coord type="theta" radius={1} innerRadius={0.75} />
                    <Axis name="percent" />
                    <Legend
                      position="right-center"
                      offsetX={-80}
                      itemMarginBottom={10}
                      itemFormatter={(val) => this.legendAmount(val)}
                      textStyle={{ fill: '#333333', fontSize: '14' }}
                    />
                    <Tooltip
                      showTitle={false}
                      itemTpl={'<li>' +
                        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
                        '<span class="li-name">{name}：</span>' +
                        '<span>{value}</span>' +
                        '</li>'}
                    />
                    <Guide>
                      <Guide.Html
                        position={["50%", "50%"]}
                        html={`<div style='color:#333333;font-size:18px;text-align: center;'>采购量<br><span style='color:#333333;font-size:20px;font-weight: bold'>${amountTotal.toFixed(2)}吨</span></div>`}
                        alignX="middle"
                        alignY="middle"
                      />
                    </Guide>
                    <Geom type="intervalStack" position="percent" color="name" style={{ lineWidth: 5, stroke: "#fff" }}
                      tooltip={["name*percent", (name, percent) => { percent = (percent * 100).toFixed(2) + "%"; return { name: name, value: percent }; }]}
                    >
                      {/* <Label content="percent" formatter={(val, item) => { return item.point.name + ": " + val; }} /> */}
                    </Geom>
                  </Chart>
              }
            </Spin>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Spin spinning={payLoading}>
              <div className={styles.col_header}>
                <span>采购付款情况</span>
                <Radio.Group onChange={(e) => this.onChangePay(e.target.value)} value={payType}>
                  <Radio.Button value={4}>供应商</Radio.Button>
                  <Radio.Button value={1}>主料</Radio.Button>
                  <Radio.Button value={2}>辅料</Radio.Button>
                  <Radio.Button value={3}>成品</Radio.Button>
                </Radio.Group>
              </div>
              {
                payData.length === 0 ?
                  <Empty /> :
                  <Chart height={400} data={dv_pay} scale={{ percent: { formatter: val => (val * 100).toFixed(2) + "%" } }} padding={[60, 440, 60, 0]} forceFit>
                    <Coord type="theta" radius={1} innerRadius={0.75} />
                    <Axis name="percent" />
                    <Legend
                      position="right-center"
                      offsetX={-80}
                      itemMarginBottom={10}
                      itemFormatter={(val) => this.legendPay(val)}
                      textStyle={{ fill: '#333333', fontSize: '14' }}
                    />
                    <Tooltip
                      showTitle={false}
                      itemTpl={'<li>' +
                        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
                        '<span class="li-name">{name}：</span>' +
                        '<span>{value}</span>' +
                        '</li>'}
                    />
                    <Guide>
                      <Guide.Html
                        position={["50%", "50%"]}
                        html={`<div style='color:#333333;font-size:18px;text-align: center;'>已付账款<br><span style='color:#333333;font-size:20px;font-weight: bold'>￥${payTotal.toFixed(2)}</span></div>`}
                        alignX="middle"
                        alignY="middle"
                      />
                    </Guide>
                    <Geom type="intervalStack" position="percent" color="name" style={{ lineWidth: 5, stroke: "#fff" }}
                      tooltip={["name*percent", (name, percent) => { percent = (percent * 100).toFixed(2) + "%"; return { name: name, value: percent }; }]}
                    >
                      {/* <Label content="percent" formatter={(val, item) => { return item.point.name + ": " + val; }} /> */}
                    </Geom>
                  </Chart>
              }
            </Spin>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Spin spinning={ratioLoading}>
              <div className={styles.col_header}>
                <span>采购合格率</span>
                <Radio.Group onChange={(e) => this.onChangeRatio(e.target.value)} value={ratioType}>
                  <Radio.Button value={4}>供应商</Radio.Button>
                  <Radio.Button value={1}>主料</Radio.Button>
                  <Radio.Button value={2}>辅料</Radio.Button>
                  <Radio.Button value={3}>成品</Radio.Button>
                </Radio.Group>
              </div>
              {
                ratioData.length === 0 ?
                  <Empty /> :
                  <Chart height={400} data={dv_ratio} scale={{ percent: { min: 0, formatter: val => (val * 100).toFixed(2) + "%" } }} padding={[40, 140, 120, 120]} forceFit>
                    <Legend />
                    <Axis name="name" />
                    <Axis name="percent" />
                    <Tooltip
                      itemTpl={'<li>' +
                        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
                        '<span class="li-name">{name}：</span>' +
                        '<span>{value}</span>' +
                        '</li>'}
                    />
                    <Geom type="intervalStack" color="type" position="name*percent"></Geom>
                  </Chart>
              }
            </Spin>
          </Col>
        </Row>
      </Card>
    )
  }
}