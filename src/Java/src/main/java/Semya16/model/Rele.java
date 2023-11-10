package Semya16.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Semya16.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Реле
 */
@Entity(name = "IISSemya16Реле")
@Table(schema = "public", name = "Реле")
public class Rele {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СостояниеР")
    private String состояниер;

    @Column(name = "НомерР")
    private Integer номерр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontroller")
    @Convert("Kontroller")
    @Column(name = "Контроллер", length = 16, unique = true, nullable = false)
    private UUID _kontrollerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontroller", insertable = false, updatable = false)
    private Kontroller kontroller;


    public Rele() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСостояниеР() {
      return состояниер;
    }

    public void setСостояниеР(String состояниер) {
      this.состояниер = состояниер;
    }

    public Integer getНомерР() {
      return номерр;
    }

    public void setНомерР(Integer номерр) {
      this.номерр = номерр;
    }


}