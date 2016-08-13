<style>
.error {
    color: red;
    font-size: 17px;
    margin-top:-10px;
    margin-bottom: 15px;
}
</style>
<!-- banner section -->
<div class="container-fluid baner-image">
    <div class="row">
        <div class="baner-txt1">
            <h4>Choose Your Role<br/>and<br/>What You have to Transfer</h4>
        </div>
    </div>
</div>
<!-- /.banner section -->
<div class="container">
    <div class="row mt40">
        <div class="col-sm-12">
            <!--<h4 class="text-center">Let's Create New Transaction</h4>-->
            <p class="text-center text1">Yscrow is your 24x7 Partner for Yscrow to/from India. Since our Inception in 2016, We have thousands of secure transactions done till date for our Esteemed users. Your financial    security is our no. 1 Priority and hence, we work 24x7 on it to ensure you have secure  hassle-free transactions.</p>
        </div>
    </div>


    <div class="row">
        <div class="col s12">
            <?php echo form_open('home/category', 'id="role_category"'); ?>
            <div class="row">
                <div class="input-field col s1 offset-m1 m1">
                    <p style="margin-top:10px; font-size:1.3rem;">I'am</p>
                </div>
                <div class="input-field col offset-s1 s9 m3 input_box">
                    <select id="user_role" name="user_role">
                        <option value="" selected="selected">&hellip;</option>
                        <option value="buyer">Buying</option>
                        <option value="provider">Selling</option>
                    </select>
                    <?php echo form_error('user_role'); ?>
                    <label></label>
                </div>

                <div class="input-field col s12 m4 input_box">
                    <select id="category" name="category">
                        <option value="" selected="selected">&hellip;</option>
                        <option value="movie_tickets">Movie Tickets</option>
                        <option value="electronics">Electronics</option>
                    </select>
                     <?php echo form_error('category'); ?>
                    <label></label>
                </div>

                <div class="col offset-s2 s8 m1">
                    <!--<input type="submit" value="Submit" />-->
                    <button type="submit" style="border:none; background:none; width:100%; margin-top:5px;"><i class="fa fa-arrow-circle-right fa-3x" style="color:#60c7c6;" aria-hidden="true"></i></button>
                </div>
            </div>
            </form>
        </div>
    </div>
</div>
