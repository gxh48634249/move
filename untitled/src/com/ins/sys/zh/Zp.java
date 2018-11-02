package com.ins.sys.zh;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Zp {
    private String id;
    private String chengjiaojia;
    private String churangnianxian;
    private String dikuaibianhao;
    private String gonggaoriqi;
    private String jianzhumianji;
    private String jiezhishijian;
    private String jingwei;
    private String qishijia;
    private String qishishijian;
    private String sizhi;
    private String tudidanjia;
    private String yijialv;
    private String yongtu;
    private String zongmianji;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "chengjiaojia")
    public String getChengjiaojia() {
        return chengjiaojia;
    }

    public void setChengjiaojia(String chengjiaojia) {
        this.chengjiaojia = chengjiaojia;
    }

    @Basic
    @Column(name = "churangnianxian")
    public String getChurangnianxian() {
        return churangnianxian;
    }

    public void setChurangnianxian(String churangnianxian) {
        this.churangnianxian = churangnianxian;
    }

    @Basic
    @Column(name = "dikuaibianhao")
    public String getDikuaibianhao() {
        return dikuaibianhao;
    }

    public void setDikuaibianhao(String dikuaibianhao) {
        this.dikuaibianhao = dikuaibianhao;
    }

    @Basic
    @Column(name = "gonggaoriqi")
    public String getGonggaoriqi() {
        return gonggaoriqi;
    }

    public void setGonggaoriqi(String gonggaoriqi) {
        this.gonggaoriqi = gonggaoriqi;
    }

    @Basic
    @Column(name = "jianzhumianji")
    public String getJianzhumianji() {
        return jianzhumianji;
    }

    public void setJianzhumianji(String jianzhumianji) {
        this.jianzhumianji = jianzhumianji;
    }

    @Basic
    @Column(name = "jiezhishijian")
    public String getJiezhishijian() {
        return jiezhishijian;
    }

    public void setJiezhishijian(String jiezhishijian) {
        this.jiezhishijian = jiezhishijian;
    }

    @Basic
    @Column(name = "jingwei")
    public String getJingwei() {
        return jingwei;
    }

    public void setJingwei(String jingwei) {
        this.jingwei = jingwei;
    }

    @Basic
    @Column(name = "qishijia")
    public String getQishijia() {
        return qishijia;
    }

    public void setQishijia(String qishijia) {
        this.qishijia = qishijia;
    }

    @Basic
    @Column(name = "qishishijian")
    public String getQishishijian() {
        return qishishijian;
    }

    public void setQishishijian(String qishishijian) {
        this.qishishijian = qishishijian;
    }

    @Basic
    @Column(name = "sizhi")
    public String getSizhi() {
        return sizhi;
    }

    public void setSizhi(String sizhi) {
        this.sizhi = sizhi;
    }

    @Basic
    @Column(name = "tudidanjia")
    public String getTudidanjia() {
        return tudidanjia;
    }

    public void setTudidanjia(String tudidanjia) {
        this.tudidanjia = tudidanjia;
    }

    @Basic
    @Column(name = "yijialv")
    public String getYijialv() {
        return yijialv;
    }

    public void setYijialv(String yijialv) {
        this.yijialv = yijialv;
    }

    @Basic
    @Column(name = "yongtu")
    public String getYongtu() {
        return yongtu;
    }

    public void setYongtu(String yongtu) {
        this.yongtu = yongtu;
    }

    @Basic
    @Column(name = "zongmianji")
    public String getZongmianji() {
        return zongmianji;
    }

    public void setZongmianji(String zongmianji) {
        this.zongmianji = zongmianji;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Zp zp = (Zp) o;
        return Objects.equals(id, zp.id) &&
                Objects.equals(chengjiaojia, zp.chengjiaojia) &&
                Objects.equals(churangnianxian, zp.churangnianxian) &&
                Objects.equals(dikuaibianhao, zp.dikuaibianhao) &&
                Objects.equals(gonggaoriqi, zp.gonggaoriqi) &&
                Objects.equals(jianzhumianji, zp.jianzhumianji) &&
                Objects.equals(jiezhishijian, zp.jiezhishijian) &&
                Objects.equals(jingwei, zp.jingwei) &&
                Objects.equals(qishijia, zp.qishijia) &&
                Objects.equals(qishishijian, zp.qishishijian) &&
                Objects.equals(sizhi, zp.sizhi) &&
                Objects.equals(tudidanjia, zp.tudidanjia) &&
                Objects.equals(yijialv, zp.yijialv) &&
                Objects.equals(yongtu, zp.yongtu) &&
                Objects.equals(zongmianji, zp.zongmianji);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, chengjiaojia, churangnianxian, dikuaibianhao, gonggaoriqi, jianzhumianji, jiezhishijian, jingwei, qishijia, qishishijian, sizhi, tudidanjia, yijialv, yongtu, zongmianji);
    }
}
