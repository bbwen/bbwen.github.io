// Resize avatar to 300px
document.addEventListener('DOMContentLoaded', function() {
    const avatarWrapper = document.querySelector('.avatar-wrapper');
    const avatar = document.querySelector('.avatar');
    
    if (avatarWrapper) {
        avatarWrapper.style.width = '300px';
        avatarWrapper.style.height = '300px';
    }
    
    if (avatar) {
        avatar.style.width = '300px';
        avatar.style.height = '300px';
    }
});
