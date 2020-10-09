package ru.itmo.web.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import java.io.Serializable;

/**
 * The Bean controllers navigation between pages
 *
 * @author Crazy
 * @since 09.10.2020 02:09:46 AM
 */
@ManagedBean
@RequestScoped
public class NavigationBean implements Serializable {
      private static final long serialVersionUID = 3132197128345123621L;

      public String moveToHome() {
            return "homePage";
      }
      public String moveToMain() {
            return "mainPage";
      }
}
