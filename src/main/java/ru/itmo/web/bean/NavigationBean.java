package ru.itmo.web.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.io.Serializable;

/**
 * The Bean controllers navigation between pages
 *
 * @author Crazy
 * @since 05.10.2020 08:46:39 PM
 */
@ManagedBean
@RequestScoped
public class NavigationBean implements Serializable {
      private static final long serialVersionUID = 3132197128345123621L;

      public String moveGraphPage() {
            return "graphPage";
      }
      public String moveTablePage() {
            return "tablePage";
      }
}
