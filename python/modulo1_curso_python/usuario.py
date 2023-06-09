class User:

    seq = 0
    objects = []

    def __init__(self, nome, idade):
        self.id = None
        self.nome = nome
        self.idade = idade
    
    def save(self):
        self.__class__.seq +=1
        self.id = self.__class__.seq
        self.__class__.objects.append(self)

    def __repr__(self):
        return '<{}: {} - {} - {}>\n'.format(self.__class__.__name__, self.id, self.nome, self.idade)

    def __str__(self):
        return self.nome
    
    @classmethod
    def all(cls):
        return cls.objects

