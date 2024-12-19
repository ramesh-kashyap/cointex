
export default function Login(){
    return(
<div>
    {/* <div class="preload preload-container">
        <div class="preload-logo" style={{backgroundImage: "url('images/logo/144.png')"}}>
          <div class="spinner"></div>
        </div>
    </div> */}
    <div class="header fixed-top bg-surface">
        <a href="#" class="left back-btn"><i class="icon-left-btn"></i></a>
    </div>
    <div class="pt-45 pb-20">
        <div class="tf-container">
            <div class="mt-32">
                <h2 class="text-center">Login Cointex</h2>
                <ul class="mt-40 socials-login">
                    <li class="mt-12"><a href="home.html" class="tf-btn md social dark"><img src="images/logo/fb.jpg" alt="img"/> Continue with Facebook</a></li>
                    <li class="mt-12"><a href="home.html" class="tf-btn md social dark"><img src="images/logo/google.jpg" alt="img"/> Continue with Google</a></li>
                    <li class="mt-12"><a href="home.html" class="tf-btn md social dark"><img src="images/logo/apple.jpg" alt="img"/> Continue with Apple</a></li>
                </ul>
            </div>
            <div class="auth-line mt-12">Or</div>
            <form action="home.html" class="mt-16">
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small"> Email</p>
                        <input type="text" placeholder="Example@gmail"/>
                    </label>
                </fieldset>
                <fieldset class="mt-16 mb-12">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Password</p>
                        <div class="box-auth-pass">
                            <input type="password" required placeholder="Your password" class="password-field"/>
                            <span class="show-pass">
                                <i class="icon-view"></i>
                                <i class="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <a href="reset-pass.html" class="text-secondary">Forgot Password?</a>
                <button class="mt-20">Login</button>
                <p class="mt-20 text-center text-small">Already have a Account? &ensp;<a href="register.html">Sign up</a></p>
            </form>
        </div>
    </div>

    
</div>
    )
}

