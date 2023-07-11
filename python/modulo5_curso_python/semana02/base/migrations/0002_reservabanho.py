# Generated by Django 4.2.2 on 2023-07-11 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReservaBanho',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('petnome', models.CharField(max_length=50)),
                ('telefone', models.IntegerField(max_length=13)),
                ('datareserva', models.DateTimeField()),
                ('observacoes', models.TextField()),
                ('datacriacao', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
