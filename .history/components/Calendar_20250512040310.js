import styles from './Calendar.module.css';
import Image from 'next/image';

const Calendar = ({ month }) => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarTitleContainer}>
        <p className={styles.calendarTitle}>Calendar</p>
      </div>
      <div className={styles.calendarContentContainer}>
        <p className={styles.month}>{month}</p>
        <div>
          <div className={styles.dayContainer}>
            <table>
              <tr>
                <td>1</td>
              </tr>
              <tr className={styles.dayRow}>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr className={styles.dayRow}>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr className={styles.dayRow}>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
              </tr>
              <tr className={styles.dayRow}>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
              </tr>
              <tr className={styles.dayRow}>
                <td>30</td>
                <td>31</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
