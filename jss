document.querySelectorAll('.seta').forEach(function(seta) {
    seta.addEventListener('click', function(e) {
        e.preventDefault();
        let explicacao = this.closest('.item').querySelector('.explicacao');
        explicacao.classList.toggle('ativo');
        this.classList.toggle('ativo');
    });
});
